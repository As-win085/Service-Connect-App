import CallLogItem from '../CallList'; 
const CallLogList = () => {
  const mockCallLogs = [
    { id: 1, name: 'Patricia D. Regalado', type: 'Incoming', date: 'Nov 03, 202X' },
    { id: 2, name: 'Jonathon K. Nix', type: 'Incoming', date: 'Nov 05, 202X' },
    { id: 3, name: 'Ellen N. Cranford', type: 'Outgoing', date: 'Nov 06, 202X' },
    { id: 4, name: 'William W. Spicer', type: 'Missed', date: 'Nov 15, 202X' },
    { id: 5, name: 'Scott D. Chambers', type: 'Outgoing', date: 'Nov 17, 202X' },
    { id: 6, name: 'Hilda M. Hernandez', type: 'Missed', date: 'Nov 18, 202X' },
    { id: 7, name: 'Hilda M. Hernandez', type: 'Outgoing', date: 'Nov 19, 202X' }, 
  ];

  return (
    <div className="h-screen w-full p-4 bg-gray-50 flex justify-center">
      <div className="w-full max-w-sm bg-white shadow-xl rounded-xl overflow-y-auto">
        
        {/* Render the list of CallLogItem components */}
        {mockCallLogs.map((log) => (
          <CallLogItem
            key={log.id} 
            name={log.name}
            type={log.type}
            date={log.date}
          />
        ))}
      </div>
    </div>
  );
};

export default CallLogList;