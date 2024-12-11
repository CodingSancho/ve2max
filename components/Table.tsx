"use client";
import { Button } from "@/components/ui/button";
import { trpc } from "@/server/client";

export function Table() {
  const getUsers = trpc.user.getUsers.useQuery();
  const removeUser = trpc.user.removeUser.useMutation({
    onSettled: () => getUsers.refetch(),
  });

  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <colgroup>
          <col className="w-[43%]" />
          <col className="w-[43%]" />
          <col className="w-[14%]" />
        </colgroup>
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Codename
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Talent
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Operation
            </th>
          </tr>
        </thead>
        <tbody>
          {getUsers.data?.map((user) => (
            <tr key={user.id} className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {user.name}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                {user.role}
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                <div className="flex justify-around">
                  <Button>Edit</Button>
                  <Button onClick={() => removeUser.mutate({ id: user.id })}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
