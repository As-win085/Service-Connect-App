import { FiCopy } from 'react-icons/fi';
import EReceiptHeader from '../E-ReceiptHeader';
import ReceiptBank from "../../assets/Images/ReceiptBank.png"
import BarCode from "../../assets/Images/BarCode.png"

const Detail = ({ label, value }) => {
  return (
    <div className="flex justify-between border-b pb-1">
      <span className="font-semibold">{label}</span>
      <span>{value}</span>
    </div>
  );
}

const EReceipt = () => {


  return (
      <div className="bg-white min-h-screen shadow-md max-w-lg w-full relative mx-auto">
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <img
              src={ReceiptBank}
              alt="Illustration"
              className="h-20"
            />
          </div>

          {/* Barcode */}
          <div className="flex justify-center mb-4">
            <img src={BarCode} alt="Bar Code" className='w-full mx-12 my-4 md:my-8' />
          </div>

          {/* Details */}
          <div className="text-sm space-y-2 text-gray-700">
            <Detail label="Name" value="Scott R. Shoemake" />
            <Detail label="Email ID" value="shoemake.redial@gmail.com" />
            <Detail label="Course" value="3d Character Illustration Cre.." />
            <Detail label="Category" value="Web Development" />
            <Detail
              label="TransactionID"
              value={
                <span className="flex items-center">
                  SK345680976 <FiCopy className="ml-2 cursor-pointer" />
                </span>
              }
            />
            <Detail label="Price" value="$55.00" />
            <Detail label="Date" value="Nov 20, 202X / 15:45" />
            <Detail
              label="Status"
              value={
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Paid
                </span>
              }
            />
          </div>
        </div>
      </div>

  );
}

export default EReceipt

