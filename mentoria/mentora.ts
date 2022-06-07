let s:=
function isBalanced(s: string): string {
    let result = [];
    for (let i=1;i<s.length;i++){
        let ultimoV;
        if (s[i] == "(" || s[i] == "{" || s[i] == "["){
            result.push(s[i]);
            ultimoV = s[i];
        }
        if (s[i] == ")" || s[i] == "}" || s[i] == "]"){
            if (s[i] == ultimoV ){
                result.pop[i];
            }else{
                return "YES"
            }
            
        }
        
    }    
}

 Number.