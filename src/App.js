import { useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import Form from './components/Form';
function App() {

  const usersData = [
    { id: 1, name: "rafay", email: "aiueo@ff",Address:"hh",Gender:"male",NIC:"22",DOB:"22/09" },
    { id: 2, name: "rafao", email: "aiueo@ff",Address:"hh",Gender:"male",NIC:"22",DOB:"22/09" },
    { id: 3, name: "rafay", email: "aiueo@ff",Address:"hh",Gender:"male",NIC:"22",DOB:"22/09" },
    
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", email: ""  ,DOB: "" , Address: "",  NIC: "",  Gender: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, email:user.email,DOB:user.DOB,Address:user.Address,NIC:user.NIC,Gender:user.Gender });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };
  return (
    <div className="App">
      <div >
        <div  className='text-indigo-600 font-extrabold	mt-10'>

        Add USER
        </div>
        {/* {editing?(

                  <div>
                  <h2>Edit User</h2>
                  <EditForm
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                  </div>
                  ) : (
                  <div>
                  <AddForm addUser={addUser} /> 
                  </div>
                  )} */}
            {
               
               //combining Addform and Editform in to Form

              <Form   editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
              addUser={addUser}
              />

           
            }
        
      </div>
     
    <Table  users={users} deleteUser={deleteUser} editRow={editRow}/>
    </div>
  ); 
}

export default App;
