# Solución para el problema de envíos en MercadoPago

## Problema identificado

El plugin `@minskylab/medusa-payment-mercadopago` no incluye el costo de envío en la preferencia de pago que se envía a MercadoPago. Esto resulta en que cuando los clientes seleccionan un método de envío con costo, solo se cobra el precio de los productos, no el envío.

## Solución implementada

Se ha creado un servicio personalizado `mercadopago-with-shipping.ts` que extiende la funcionalidad del plugin original para incluir correctamente el costo de envío como un item adicional en la preferencia de MercadoPago.

### Cambios realizados:

1. **Nuevo servicio personalizado**: `src/services/mercadopago-with-shipping.ts`
   - Incluye el shipping como un item adicional cuando tiene costo > 0
   - Mantiene toda la funcionalidad original del plugin
   - Compatible con la API de MercadoPago

2. **Configuración actualizada**: `medusa-config.js`
   - Reemplazado el plugin original por nuestro servicio personalizado
   - Mantiene las mismas opciones de configuración

### Cómo funciona la solución:

Cuando se crea o actualiza una preferencia de pago:

1. Se mapean todos los items del carrito normalmente
2. **Si `cart.shipping_total > 0`**, se agrega un item adicional:
   ```javascript
   {
     id: "shipping",
     title: "Costo de envío", 
     quantity: 1,
     unit_price: humanizeAmount(cart.shipping_total, currency_code),
     currency_id: currency_code.toUpperCase(),
     description: "Costo de envío del pedido"
   }
   ```

3. La preferencia se envía a MercadoPago con todos los items (productos + envío)

## Instrucciones de implementación

### 1. Verificar archivos creados
Asegúrate de que estos archivos existen:
- `src/services/mercadopago-with-shipping.ts`
- `medusa-config.js` (actualizado)

### 2. Instalar dependencias
```bash
cd medusajs-backend
npm install
```

### 3. Reiniciar el servidor
```bash
npm run dev
# o
npm run build && npm start
```

### 4. Probar la funcionalidad
1. Agregar productos al carrito
2. Seleccionar un método de envío con costo
3. Proceder al checkout con MercadoPago
4. Verificar que el total incluye el costo de envío

## Verificación

Para verificar que la solución funciona:

1. **En el frontend**: El total mostrado debe incluir el envío
2. **En MercadoPago**: La preferencia debe mostrar:
   - Items de productos
   - Item adicional "Costo de envío" (si aplica)
   - Total correcto

## Rollback (si es necesario)

Si necesitas volver al plugin original:

1. Revertir `medusa-config.js`:
```javascript
{
  resolve: `@minskylab/medusa-payment-mercadopago`,
  options: {
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
    success_backurl: process.env.MERCADOPAGO_SUCCESS_BACKURL,
    webhook_url: process.env.MERCADOPAGO_WEBHOOK_URL,
  },
},
```

2. Eliminar el archivo `src/services/mercadopago-with-shipping.ts`

## Notas adicionales

- La solución es compatible con todos los métodos de envío configurados
- No afecta el funcionamiento de otros métodos de pago
- Mantiene la compatibilidad con webhooks y notificaciones de MercadoPago
- El shipping se muestra como un item separado en MercadoPago para mayor transparencia

## Soporte

Si encuentras algún problema con esta solución, verifica:
1. Que las variables de entorno de MercadoPago estén configuradas correctamente
2. Que el servidor se haya reiniciado después de los cambios
3. Que no haya errores en los logs del servidor
