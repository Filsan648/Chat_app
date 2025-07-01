export default function Page() {
    return <div className="font-sans  h-full w-full bg-white shadow-2xl rounded-2xl flex justify-center items-center flex-col"><h1 className="text-center text-2xl">Formulaire</h1>
    <form className="mt-14" >
    <div className="grid grid-cols-2 gap-3.5">
 <div className="flex flex-row gap-7 "><label>   Materiel : </label> 
  <input type="text" name="Materiel" placeholder="Materiel"  className="border-2 border-gray-500/80 w-60 rounded-sm bg-blue-100/60"/></div>
  <div className="flex flex-row gap-7 "><label>  Nombre </label> 
  <input type="number" name="Nombre" placeholder="Nombre"  className="border-2 border-gray-500/80 w-60 rounded-sm bg-blue-100/60"/></div>
  <div className="flex flex-row gap-4 "><label> Le nom d'utilisateur :</label> 
  <input type="text" name="user" placeholder="Utilisateur"  className="border-2 border-gray-500/80 w-60 rounded-sm bg-blue-100/60"/></div>
  <div className="flex flex-row gap-7 "><label> Gestionnaire :</label> 
  <input type="text" name="Gestionnaire" placeholder="Gestionnaire"  className="border-2 border-gray-500/80 w-60 rounded-sm bg-blue-100/60"/></div>
 
  </div>
  <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold mt-10 flex justify-end items-end " > Enregistre  </button>
    </form> 
    </div>;
  }
  