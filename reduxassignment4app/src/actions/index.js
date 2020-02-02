export function courseListdata(){
    const output = fetch('http://localhost:8900/cource',{method:'GET'})
    .then(response => response.json())
    return{
        type:'COURSE_LIST',
        payload:output
    }
}


export function SendFormDetails(userName,details){

    var random = Math.floor(Math.random()*1000)
    var data = {
        id: random,
        userName:userName ,
        details: details,
      }

      fetch(`http://localhost:8900/cource`,{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
      })

      .then((response) => response.json())


      return{
          type:'POST_FORM',
          payload: ''
      }
}