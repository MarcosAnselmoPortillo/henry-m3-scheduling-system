export function sortAppointments(appointments) {
  return appointments.sort((a, b) => {
    // Ordena por status
    if (a.status === "active" && b.status === "cancelled") {
      return -1; // a antes que b
    } else if (a.status === "cancelled" && b.status === "active") {
      return 1; // b antes que a
    }

    // Si el status es igual, ordena por fecha
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA < dateB) {
      return -1; // a antes que b
    } else if (dateA > dateB) {
      return 1; // b antes que a
    }

    // Si la fecha es igual, ordena por hora
    const timeA = new Date(`2000-01-01T${a.time}`);
    const timeB = new Date(`2000-01-01T${b.time}`);
    if (timeA < timeB) {
      return -1; // a antes que b
    } else if (timeA > timeB) {
      return 1; // b antes que a
    }

    // Si todo es igual, mantener el orden actual
    return 0;
  });
}

const appointments = [
	{
		"id": 1,
		"date": "2024-04-17T00:00:00.000Z",
		"time": "11:00",
		"description": "Solicitar crédito",
		"status": "cancelled"
	},
	{
		"id": 2,
		"date": "2024-04-18T00:00:00.000Z",
		"time": "11:00",
		"description": "Presentar documentación",
		"status": "cancelled"
	},
	{
		"id": 3,
		"date": "2024-04-17T00:00:00.000Z",
		"time": "11:00",
		"description": "Test cancelación",
		"status": "cancelled"
	},
	{
		"id": 4,
		"date": "2024-04-17T00:00:00.000Z",
		"time": "14:59",
		"description": "Test cancelación 2",
		"status": "cancelled"
	},
	{
		"id": 5,
		"date": "2024-04-17T00:00:00.000Z",
		"time": "14:00",
		"description": "test cancelación 3",
		"status": "cancelled"
	},
	{
		"id": 6,
		"date": "2024-04-17T00:00:00.000Z",
		"time": "12:00",
		"description": "Test cancelación 4",
		"status": "cancelled"
	},
	{
		"id": 7,
		"date": "2024-04-17T00:00:00.000Z",
		"time": "12:00",
		"description": "Test cancelación 5",
		"status": "cancelled"
	},
	{
		"id": 8,
		"date": "2024-04-17T00:00:00.000Z",
		"time": "12:00",
		"description": "Test cancelación 6",
		"status": "active"
	},
	{
		"id": 9,
		"date": "2024-04-18T00:00:00.000Z",
		"time": "12:00",
		"description": "Test cancelación final",
		"status": "cancelled"
	},
	{
		"id": 10,
		"date": "2024-04-18T00:00:00.000Z",
		"time": "12:00",
		"description": "testttt",
		"status": "cancelled"
	},
	{
		"id": 11,
		"date": "2024-04-18T00:00:00.000Z",
		"time": "12:00",
		"description": "testtt",
		"status": "active"
	}
];

const sortedAppointments = sortAppointments(appointments);
console.log(sortedAppointments);
