# Sistema de Gestión de Turnos de Henry Bank

## Sucursales:
- **Casa Central:** 
  - Provincia: CABA
  - Localidad: CABA
  - Dirección: XX
  - CP: XX
  - Teléfono: XX
  - Nro sucursal: 1
  - Horario de Atención: de 10 a 15.
  
- **Sucursal Corrientes:** 
  - Provincia: Corrientes
  - Localidad: Corrientes
  - Dirección: XX
  - CP: 3400
  - Teléfono: XX
  - Nro sucursal: 2
  - Horario de Atención: de 7 a 11:30.

## User Stories:

### Usuario anónimo:
- Debe poder acceder a las páginas del Home, Contacto y Acerca de.
- Debe poder registrarse.
  - Debe poder rellenar un formulario de alta de usuario con los siguientes datos: nombre de usuario, nombre, apellido, password, nro de teléfono, dirección, provincia, localidad, Código Postal, Sucursal más cercana, email, foto de perfil.
    - El password debe estar compuesto por letras y números, debe tener una longitud mínima de 6 caracteres, y debe tener al menos un caracter especial. 
    - El email debe tener un formato válido.
  - Debe recibir un enlace de confirmación en su correo electrónico y debe hacer clic en él para activar su cuenta.

### Usuario registrado:
- Debe poder iniciar sesión con sus credenciales.
- Debe poder acceder a las páginas del Home, Contacto y Acerca de, Mis Turnos y Editar Perfil.
- Debe poder registrar un turno en un día hábil y dentro del horario de atención de la sucursal deseada, hasta 30 minutos antes de la hora de cierre de la sucursal. 
  - Formulario para reservar un turno.
    - Se permitirá seleccionar una sucursal.
    - Se mostrarán los horarios de atención de la sucursal.
    - Para la selección de la fecha del turno, se dispondrá de un calendario con fechas de días hábiles.
    - Se permitirá seleccionar la hora y los minutos del inicio del turno. Si selecciona un horario fuera del horario de atención de la sucursal, se le mostrará un mensaje de error, indicando el horario permitido. 
- Debe poder cancelar un turno hasta el día anterior al día de reserva. 
- Debe recibir un mensaje de advertencia de que la cancelación no se puede deshacer. 
- No debe poder registrar más de un turno en un mismo día. Se le mostrará un mensaje indicando que ya tiene un turno registrado en ese día. 
- Debe recibir un email cuando registra un turno con la información de la sucursal seleccionada, la fecha, el horario y el motivo del turno. 
- Debe recibir un mail cuando cancela un turno con la información del turno cancelado: sucursal, fecha, horario y motivo del turno. 
- Debe poder actualizar su foto de perfil.
- Debe poder actualizar su password.
  - El password debe estar compuesto por letras y números, debe tener una longitud mínima de 6 caracteres, y debe tener al menos un caracter especial.
- Debe poder actualizar su información personal: número de teléfono, dirección, sucursal cercana. 
- Debe poder actualizar su email. 
- Debe poder cerrar sesión.
- Debe poder consultar sus turnos.
- Debe poder recibir un mensaje de confirmación luego de que el usuario realice una acción: reservar un turno, cancelar un turno, editar su perfil.
- Debe poder recuperar sus credenciales.
  - Formulario de recuperación de credenciales.

## Turnos:
- Se corresponden a un usuario registrado.
- Puede tener dos estados: activo o cancelado.
- Tiene información de la fecha, la hora, duración, estado, y el motivo del turno.
- Se deben poder registrar en una ventana de un horario específico (dentro del horario de atención).
- Los turnos deben tener una duración de 30 minutos.
- Se asume que el establecimiento tiene infinitos recursos para atender a los usuarios.
