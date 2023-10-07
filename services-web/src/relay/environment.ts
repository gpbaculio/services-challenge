import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  QueryResponseCache,
  Variables,
  GraphQLResponse,
  CacheConfig,
  UploadableMap,
} from "relay-runtime";

const HTTP_ENDPOINT = "http://localhost:4000/graphql";
const IS_SERVER = typeof window === typeof undefined;
const CACHE_TTL = 5 * 1000; // 5 seconds, to resolve preloaded results

const getRequestBodyWithUploadables = (
  request: RequestParameters,
  variables: Variables,
  uploadables: UploadableMap
) => {
  const formData = new FormData();
  formData.append("query", JSON.stringify(request.text));
  formData.append("variables", JSON.stringify(variables));

  const keys = Object.keys(uploadables);

  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
      formData.append(key, uploadables[key]);
    }
  });

  return formData;
};

const getRequestBodyWithoutUplodables = (
  request: RequestParameters,
  variables: Variables
) =>
  JSON.stringify({
    query: request.text,
    variables,
  });

const getRequestBody = (
  request: RequestParameters,
  variables: Variables,
  uploadables: UploadableMap | null | undefined
) => {
  if (uploadables) {
    return getRequestBodyWithUploadables(request, variables, uploadables);
  }

  return getRequestBodyWithoutUplodables(request, variables);
};

export async function networkFetch(
  request: RequestParameters,
  variables: Variables,
  uploadables: UploadableMap | null | undefined
): Promise<GraphQLResponse> {
  // const token = await AsyncStorage.getItem('token');
  const body = getRequestBody(request, variables, uploadables);

  const headers = {
    ...(uploadables
      ? { Accept: "*/*" }
      : { Accept: "application/json", "Content-type": "application/json" }),
    // ...(token && { Authorization: token }),
  };

  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers,
    body,
  });

  const json = await resp.json();

  // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
  // property of the response. If any exceptions occurred when processing the request,
  // throw an error to indicate to the developer what went wrong.
  if (Array.isArray(json.errors)) {
    console.error(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${
        request.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors
      )}`
    );
  }

  return json;
}

export const responseCache: QueryResponseCache | null = IS_SERVER
  ? null
  : new QueryResponseCache({
      size: 100,
      ttl: CACHE_TTL,
    });

function createNetwork() {
  async function fetchResponse(
    params: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables: UploadableMap | null | undefined
  ) {
    const isQuery = params.operationKind === "query";
    const cacheKey = params.id ?? params.cacheID;
    const forceFetch = cacheConfig && cacheConfig.force;
    if (responseCache != null && isQuery && !forceFetch) {
      const fromCache = responseCache.get(cacheKey, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return networkFetch(params, variables, uploadables);
  }

  const network = Network.create(fetchResponse);

  return network;
}

function createEnvironment() {
  return new Environment({
    network: createNetwork(),
    store: new Store(RecordSource.create()),
    isServer: IS_SERVER,
  });
}

export const environment = createEnvironment();

export function getCurrentEnvironment() {
  if (IS_SERVER) {
    return createEnvironment();
  }

  return environment;
}
