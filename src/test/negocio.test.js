// src/test/negocio.test.js

// Importamos las funciones atómicas a evaluar
const { calcularStockDisponible, calcularTotalConImpuesto } = require('../services/negocioService');

describe('Pruebas Unitarias - Módulos Core de TecnoRepuestos S.A.', () => {

    // ==========================================
    // TEST DE LA FUNCIÓN: calcularStockDisponible
    // ==========================================
    describe('Función: calcularStockDisponible()', () => {
        
        test('Debería restar correctamente el stock cuando hay existencias suficientes', () => {
            const stockActual = 50; // Ejemplo: 50 cables en bodega
            const cantidadSolicitada = 10;
            
            const resultado = calcularStockDisponible(stockActual, cantidadSolicitada);
            
            expect(resultado).toBe(40); // Esperamos que queden 40 unidades
        });

        test('Debería lanzar una excepción si la venta supera el stock (RN-VEN-01)', () => {
            const stockActual = 5;
            const cantidadSolicitada = 12; // Intento de sobreventa
            
            // Evaluamos que la función dispare el error de bloqueo transaccional
            expect(() => {
                calcularStockDisponible(stockActual, cantidadSolicitada);
            }).toThrow("Cantidad solicitada supera el stock disponible");
        });
    });

    // ==========================================
    // TEST DE LA FUNCIÓN: calcularTotalConImpuesto
    // ==========================================
    describe('Función: calcularTotalConImpuesto()', () => {
        
        test('Debería calcular el total aplicando el 15% de IVA estándar de Ecuador', () => {
            const subtotal = 100.00; // Compra de $100 en componentes
            
            const totalFinal = calcularTotalConImpuesto(subtotal, 15);
            
            expect(totalFinal).toBe(115.00); // $100 + $15 de IVA
        });

        test('Debería lanzar un error si el subtotal ingresado es negativo', () => {
            const subtotalInvalido = -50.00;
            
            expect(() => {
                calcularTotalConImpuesto(subtotalInvalido, 15);
            }).toThrow("El subtotal no puede ser un valor negativo");
        });
    });
});