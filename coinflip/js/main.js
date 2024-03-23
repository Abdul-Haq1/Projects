document.querySelector('#clickMe').addEventListener('click', makeReq)

function machineresult() {
  const random = Math.random()
  if (random > 0.5) {
    return 'head'
  } else {
    return 'tail'
  }
}

async function makeReq() {
  const userChoice = document.querySelector("#userChoice").value;
  let botChoice = machineresult()

  let result
  if (botChoice === userChoice) {
    result = true
  } else {
    result = false
  }

  try {
    const res = await fetch(`/api?getResult=${result}`)
    const data = await res.json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }


  // document.querySelector("#result").textContent = data.name
}