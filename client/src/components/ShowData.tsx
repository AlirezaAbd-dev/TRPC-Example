import { trpc } from "../utils/trpc";

export default function ShowData() {
  const sayHiQuery = trpc.users.get.useQuery({ userId: "1" });
  const logToServerMutation = trpc.log.useMutation();
  const updateMutation = trpc.users.update.useMutation();

  console.log(trpc.users.secretData.useQuery());

  const handler = () => {
    // console.log(logToServerMutation.mutate("hay bro"));
    updateMutation.mutate({ userId: "1", name: "Alireza" });
  };
  updateMutation.isSuccess && alert(updateMutation.data.name);

  return (
    <div>
      {sayHiQuery.data?.name}

      <button onClick={handler}>Click Me</button>
    </div>
  );
}
