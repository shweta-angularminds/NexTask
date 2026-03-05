import api from "@/lib/axios";

export const createBoard = async (data: { title: string }) => {
  const res = await api.post("/boards/", data);

  return res.data;
};
