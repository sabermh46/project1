
  const start_b = document.querySelector(".start_btn");
  start_b.classList.add('hide');

  var questions = [];
        
        const excel_file = document.getElementById('excel_file');
    
        excel_file.addEventListener('change', (event) => {
    
            if(!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(event.target.files[0].type))
            {
                document.getElementById('top').textContent = 'Only .xlsx or .xls file format are allowed';
    
                excel_file.value = '';
                return false;
            }
    
            var reader = new FileReader();
    
            reader.readAsArrayBuffer(event.target.files[0]);
    
            reader.onload = function(event){
    
                var data = new Uint8Array(reader.result);
    
                var work_book = XLSX.read(data, {type:'array'});
    
                var sheet_name = work_book.SheetNames;
    
                var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header:1});
                
                
                if(sheet_data.length > 0)
                {

                    document.getElementById('container').classList.add('hide');
                    start_b.classList.remove('hide');
                    document.getElementById('top').innerHTML = `Excell data successfully imported and conveted<br>Click Start Button to start exam`;
                    
                }
                
                
                for(var inc=0; inc<sheet_data.length; inc++)
                {
                    questions[inc] = {
                        'numb': inc+1,
                        'answer': "",
                        'question': "",
                        'options': [
                            "",
                            "",
                            "",
                            ""
                        ]
                    };
                }
    
                
                for(var i=0; i<sheet_data.length; i++)
                {
                    questions[i].question = sheet_data[i][0];
                    questions[i].answer = sheet_data[i][5];
                    for(var j = 0; j<4; j++){
                        questions[i].options[j] = sheet_data[i][j+1];
                    }
                }

                excel_file.value = '';
    
            }
    
        });
