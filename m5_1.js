const value = +prompt('Введите значение','') if (typeof +value !== 'number') 
{ alert('Упс, кажется, вы ошиблись') } 
else if (isNaN(value % 2)) 
{ alert('Упс, кажется, вы ошиблись') } 
else if (value % 2 === 0) 
{ alert('Число четное') } 
else { alert('Число нечетное') }