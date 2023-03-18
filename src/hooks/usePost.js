import axios from "axios";
import { useMutation } from "react-query";

const SERVER = "http://localhost:4000";

export function useRegisterTeam() {
  return useMutation((values) =>
    axios.post(`${SERVER}/team/registration`, values).then((res) => res.data)
  );
}
