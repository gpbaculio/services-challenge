import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import * as yup from "yup";

const pageSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  image: yup
    .mixed<FileList>()
    .required()
    .test(
      "upload profile image",
      "Upload admin profile image",
      (value) => !value || (value && value.length > 0)
    )
    .test(
      "format",
      "Invalid format. Only jpg, jpeg, png are allowed",
      (value) =>
        !value ||
        (value &&
          value.length > 0 &&
          ["image/jpg", "image/jpeg", "image/png"].includes(value[0].type))
    ),
});

function usePageFormResolver() {
  return yupResolver(pageSchema);
}

export default usePageFormResolver;
