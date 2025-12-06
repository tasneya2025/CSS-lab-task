 function addStudent() {
          
            const nameInput = document.getElementById("name");
            const rollInput = document.getElementById("roll");
            const deptInput = document.getElementById("dept");

            const name = nameInput.value;
            const roll = rollInput.value;
            const dept = deptInput.value;

           
            if (name === "" || roll === "" || dept === "") {
                alert("Please fill in all fields!");
                return; 
            }

        
            const tableBody = document.getElementById("student-table-body");
            const newRow = document.createElement("tr");

           
            const nameCell = document.createElement("td");
            nameCell.textContent = name;
            
           
            const rollCell = document.createElement("td");
            rollCell.textContent = roll;

         
            const deptCell = document.createElement("td");
            deptCell.textContent = dept;

            
            const actionCell = document.createElement("td");
        

           
            newRow.appendChild(nameCell);
            newRow.appendChild(rollCell);
            newRow.appendChild(deptCell);
            newRow.appendChild(actionCell);

            
            tableBody.appendChild(newRow);

            
            nameInput.value = "";
            rollInput.value = "";
            deptInput.value = "";
        }