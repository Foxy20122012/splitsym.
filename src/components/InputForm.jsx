import { useState } from 'react';
import AlertModal from './AlertModal';

const InputForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      setAlertMessage('Datos no registrados. Por favor ingrese datos.');
      setShowAlert(true);
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="block font-medium text-gray-700 mb-2">
          Enter Symbols:
        </label>
        <input
          type="text"
          className="border-2 border-gray-500 py-2 px-4 rounded-md w-full mb-4"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {showAlert && (
        <AlertModal onClose={handleAlertClose}>
          {alertMessage}
        </AlertModal>
      )}
    </div>
  );
};

export default InputForm;
