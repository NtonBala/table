Задана таблица в виде json, например:

{
 "header": [
   ["line1", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line2", "Some text", "Some text", "Some text Some text Some text Some text Some text"]
 ],
 "body": [
   ["line1", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line2", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line3", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line4", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line5", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line6", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line7", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line8", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line9", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line10", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line11", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line12", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line13", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line14", "Some text", "Some text", "Some text Some text Some text Some text Some text"],
   ["line15", "Some text", "Some text", "Some text Some text Some text Some text Some text"]
 ]
}

Задача: 
    1. отобразить эту таблицу на экране. При этом необхожимо чтобы все ячейки из раздела header “прилипали” к верху экрана при скроллинге (position: sticky), но при этом чтобы не перекрывали друг друга ( в данном примере чтобы воторой ряд не перекрывал первый).  
    2. ПРедусмотреть вывод данной таблицы на печать. При этом ячейки из header должны повторяться на данной странице.

P.S. образец таблицы дан как пример. Компонент должен “уметь” работать  произвольной таблицей. При выполнении задания исходные данные (json с таблицей) можно менять..
