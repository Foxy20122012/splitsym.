

const SymbolTableItem = ({ id, symbol }) => {
  return (
    <tr className="border border-gray-800">
      <td className="border border-gray-800 px-4 py-2">{id}</td>
      <td className="border border-gray-800 px-4 py-2">{symbol}</td>
    </tr>
  );
};

export default SymbolTableItem;
