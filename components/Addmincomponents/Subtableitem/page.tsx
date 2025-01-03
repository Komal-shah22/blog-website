import React from 'react';

interface SubsTableItemProps {
  email: string;
  date: string;
  mongoId: string;
  deleteEmail: (id: string) => Promise<void>;
}

const SubsTableItem: React.FC<SubsTableItemProps> = ({ email, date, mongoId, deleteEmail }) => {
  return (
    <tr className="bg-white border-b text-left">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {email || 'No Email'}
      </th>
      <td className="px-6 py-4 hidden sm:block">{date || 'N/A'}</td>
      <td
        className="px-6 py-4 text-red-600 cursor-pointer hover:text-red-800"
        onClick={() => deleteEmail(mongoId)}
        role="button"
        aria-label="Delete Email"
      >
        X
      </td>
    </tr>
  );
};

export default SubsTableItem;

