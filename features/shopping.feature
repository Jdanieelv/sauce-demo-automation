@shopping
Feature: Proceso de compra en Sauce Demo
  Como un cliente de Sauce Demo
  Quiero agregar productos al carrito y completar una compra
  Para adquirir los productos que necesito

  Background:
    Given estoy logueado como "standard_user" con clave "secret_sauce"

  Scenario: Agregar un producto al carrito
    When agrego el primer producto al carrito
    Then el contador del carrito debería mostrar "1"

  Scenario: Ver productos en el carrito
    When agrego el primer producto al carrito
    And voy al carrito de compras
    Then debería ver 1 producto en el carrito

  Scenario: Completar el proceso de compra
    When agrego el primer producto al carrito
    And voy al carrito de compras
    And procedo al checkout
    And completo el formulario con nombre "Juan" apellido "Perez" y código postal "15001"
    And confirmo la compra
    Then debería ver el mensaje de confirmación "Thank you for your order!"
