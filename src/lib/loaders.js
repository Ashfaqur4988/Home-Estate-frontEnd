import apiRequest from "./apiRequest";

export const loaders = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};
