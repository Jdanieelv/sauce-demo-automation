@login
Feature: Login en Sauce Demo
  Como un cliente de Sauce Demo
  Quiero poder iniciar sesión
  Para acceder a los productos de la tienda

  Scenario: Login exitoso con usuario estándar
    Given estoy en la página de login
    When ingreso las credenciales "standard_user" y "secret_sauce"
    Then debería ver la página de productos

  Scenario: Login fallido con usuario bloqueado
    Given estoy en la página de login
    When ingreso las credenciales "locked_out_user" y "secret_sauce"
    Then debería ver el mensaje de error "Epic sadface: Sorry, this user has been locked out."

  Scenario: Login fallido con credenciales inválidas
    Given estoy en la página de login
    When ingreso las credenciales "usuario_falso" y "clave_falsa"
    Then debería ver el mensaje de error "Epic sadface: Username and password do not match any user in this service"
