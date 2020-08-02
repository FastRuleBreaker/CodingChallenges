window.onload = initialize
let form, log, dayInput, calendar;
const today = new Date()
let ArrayOfDays, lastDayOfMonth

function yearMonthDate(day){
  return day.toISOString().split("T")[0].split("-")
}

function yearMonthDateFromInput(value){
  const [year, month, day] = value.split("-")
  const date = new Date(year, Number(month)-1, Number(day))
  return yearMonthDate(date)
}
function deleteAppointment(date){
  console.log(ArrayOfDays[date])
  if(ArrayOfDays[date].appointment){
    ArrayOfDays[date].appointment = false
    let node = ArrayOfDays[date].node
    node.classList.remove('appointment')
    node.innerHTML = ''
    log.classList.remove('log-fail')
    log.classList.remove('log-success')
    log.classList.add('log-success')
    log.textContent = `Appointment deleted`;
  }
}

function editAppointment(date){
  if(ArrayOfDays[date].appointment){
    const newValue = prompt("New appointment name:", "");
    if(newValue!=null){
      console.log(newValue.length)
      if(newValue.length && newValue.length < 10){
        let node = ArrayOfDays[date].node
        console.log(node.childNodes[0].nodeValue)
        node.childNodes[0].nodeValue = newValue
        log.classList.remove('log-fail')
        log.classList.remove('log-success')
        log.classList.add('log-success')
        log.textContent = `Appointment edited`;
      }else{
        alert("Value must be between 1 and 10 characters")
      }
    }
  }
}

function createAppointment(date, name){
  const dateIndex = date-1
  if(!ArrayOfDays[dateIndex].appointment){
    ArrayOfDays[dateIndex].appointment = true
    let node = ArrayOfDays[dateIndex].node
    node.classList.add('appointment')
    node.innerHTML = `${name}`
    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'
    deleteButton.addEventListener('click', function(){deleteAppointment(dateIndex)})
    node.appendChild(deleteButton)
    let editButton = document.createElement('button')
    editButton.innerHTML = 'Edit'
    editButton.addEventListener('click', function(){editAppointment(dateIndex)})
    node.appendChild(editButton)
  }
}

function logSubmit(event) {
  event.preventDefault();
  log.classList.remove('log-fail')
  log.classList.remove('log-success')
  let name = nameInput.value 
  const [year, month, date] = yearMonthDateFromInput(dayInput.value).map(e => Number(e))
  const validDate = !ArrayOfDays[date-1].appointment
  if(validDate){
    log.classList.add('log-success')
    createAppointment(date, name)
    const [yearStr, monthStr, dateStr] = yearMonthDateFromInput(dayInput.value)
    log.textContent = `Appointment created on ${monthStr}/${dateStr}/${yearStr} for ${name}`;
  } else {
    log.classList.add('log-fail')
    log.textContent = `Appointment already exists on this given date, please select another day or delete the appointment from the calendar`;
  }
}

function calendarValidation(){
  const [year, month, date] = yearMonthDate(today)
  const lastDayOfMonth = ( new Date(year, month, 0) ).getDate()
  dayInput.setAttribute("min",`${year}-${month}-${date}`) 
  dayInput.setAttribute("max",`${year}-${month}-${lastDayOfMonth}`)
}


function fillCalendarDiv(){
  const [year, month, date] = yearMonthDate(today)
  lastDayOfMonth = ( new Date(year, month, 0) ).getDate()
  ArrayOfDays = Array.from(Array(lastDayOfMonth),(x,i)=>({day: i+1, appointment: false, node: null}))
  const firstWeekDay = ( new Date(year, Number(month)-1, 1) ).getDay()// will be the first column 0 to 6
  ArrayOfDays.forEach((value, index)=>{
    const dayDiv = document.createElement("div")
    const text = document.createTextNode(value.day)
    const appointmentDiv = document.createElement("div")
    value.node = appointmentDiv
    dayDiv.appendChild(text)
    dayDiv.appendChild(appointmentDiv)
    const row = 1+Math.floor((firstWeekDay+index)/7)
    const column = 1+((firstWeekDay+index)%7)
    dayDiv.style.gridRow = row
    dayDiv.style.gridColumn = column
    dayDiv.classList.add('day')
    calendar.appendChild(dayDiv)
  })
}

function initialize(){
  form = document.getElementById('form');
  log = document.getElementById('log');
  dayInput = document.getElementById('dayInput')
  calendar = document.getElementById('calendar')
  form.addEventListener('submit', logSubmit);
  calendarValidation(dayInput)
  fillCalendarDiv()
}