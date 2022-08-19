const dividir = (n1,n2) => {
    
    if (n1 == 0){
        return "No puedes divir 0";
    }else if (n2 == 0){
        return "No puedes divir entre 0";
    }else{
        return n1/n2;
    }
}

module.exports = dividir;