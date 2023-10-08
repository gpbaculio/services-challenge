import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const pageSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function useLoginYupResolver() {
  return yupResolver(pageSchema);
}

export default useLoginYupResolver;
