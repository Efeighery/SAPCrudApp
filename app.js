var app = new function(){
    this.ele = document.getElementById('rules');

    this.rules=[]

    this.FetchAll = function(){
        var data = '';

        if(this.rules.length > 0){
          // TODO document why this block is empty
        
            for(a = 0; a < this.rules.length; a++){
                data+='<tr>';
                data+='<td>'+(a+1)+'. '+this.rules[a]+'</td>';

                data+='<td><button onclick="app.Edit('+a+')"class="btn btn-success">Edit</button></td> ';
                data+='<td><button onclick="app.Delete('+a+')"class="btn btn-danger">Delete</button></td> ';
                data+='</tr>';
            }
        }

        this.Count(this.rules.length);
        return this.ele.innerHTML = data;
    };

    this.Add = function(){
        ele = document.getElementById('add-note');

        var rule = ele.value;

        if(rule){
            this.rules.push(rule.trim());
            ele.value = '';

            this.FetchAll();
        }

    };

    this.Edit = function(item){
        ele = document.getElementById('edit-note');
        ele.value = this.rules[item]

        document.getElementById('editor').style.display = 'block';

        self = this;

        document.getElementById('save-edits').onsubmit = function(){
            var rule = ele.value;

            if(rule){
                self.rules.splice(item, 1, rule.trim());

                self.FetchAll();
                CloseInput();
            }
        }
    };

    this.Delete = function(item){
        this.rules.splice(item, 1)
        this.FetchAll();
    };

    this.Count = function(data){
        var ele = document.getElementById('incrementer');
        var name = 'Rules';

        if(data){
            if(data == 1){
                name = 'Rule';
            }
            ele.innerHTML = data+' '+name;
        }
        else{
            ele.innerHTML = "No "+name;
        }
    };
}

app.FetchAll();

function CloseInput(){
    document.getElementById('editor').style.display ='none';
}