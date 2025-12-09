import { useNavigate } from 'react-router-dom';

function EditForm({ onUpdate, item }) {
  const navigate = useNavigate();

  const handleUpdate = () => {
    onUpdate(item);
    // No redirige, se queda en la misma página
  };

  const handleUpdateAndReturn = () => {
    onUpdate(item);
    navigate('/listado'); // Ajusta la ruta según tu app
  };

  return (
    <div>
      {/* Campos del formulario */}
      <button onClick={handleUpdate}>Actualizar y Continuar Editando</button>
      <button onClick={handleUpdateAndReturn}>Actualizar y Regresar a Listado</button>
    </div>
  );
}