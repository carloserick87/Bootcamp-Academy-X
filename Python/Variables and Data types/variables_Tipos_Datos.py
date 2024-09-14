number = 37
decimalNumber = 5.14
text = 'Hola, Academia X'
booleano = True

#-----------------------------

listas = [1,2,3,4,5,6]
fruits = ['manzana','banana','cereza']
colors = ('rojo','verde','azul')
fruits_dictionary = {
        'manzana':3,
        'banana':5,
        'cereza':2
}

#-----------------------------

set1={1,2,3,4,5}
set2= frozenset([2,2,4,4,6,6,8,10])

#-----------------------------

valor=None

#-----------------------------

cost = 1000
typeVariables1 = type(number)
typeVariables2 = type(text)

#-----------------------------

print(f'Numero entero:{number}')
print(f'Numero decimal:{decimalNumber}')
print('Texto:'+text)
print(f'Booleano:{booleano}\n')

#-----------------------------
print('Listas:')
print(listas)
print(fruits)
print(colors)
print(f'Diccionario de frutas:{fruits_dictionary}\n')
print(f'Conjunto 1:{set1}')
print(f'Conjunto 2:{set2}')
print(f'Valor nulo:{valor}')
print(f'F-string:\n El producto: Laptop tiene un precio de {cost} USD.\n')
print('Tipos:')
print(f'Tipos de numero entero:{typeVariables1}')
print(f'Tipos de numero entero:{typeVariables2}')







