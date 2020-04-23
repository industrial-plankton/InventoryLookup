/*      Copyright Industrial Plankton 2020
 *      Written by:  Ben Ursel Feb 2020
 *      
 *      Last Update: Ben Ursel 2020
 *
 *      ---Library---
 *      jQuery library   
 *
 *      ---Functionality---
 *      Waits for the document to load
 *      Defines the jexcel table with dummy data matrix
 *      Defines a callback function to update and style matrix
 */

$(document).ready(function(){


    tableWidth = $('#table').width();
    dataWidth = (tableWidth-(tableWidth/24));  //Part of the table is taken up be the 1,2,3 column

    //Sample Data
    var data = [
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g'],
        ['a','b','c','d','e','f','g']
    ];

    //Initializing the table
    table = jexcel(document.getElementById('jexcelTable'), {
        data:data,
        columns: [
            { type: 'text', title:'IP SKU',                     width:(dataWidth/7)},
            { type: 'text', title:'Technical Description',      width:(dataWidth/7)},
            { type: 'text', title:'Customer Description',       width:(dataWidth/7)},
            { type: 'text', title:'Supplier (Main)',            width:(dataWidth/7)},
            { type: 'text', title:'Main Supplier PN',           width:(dataWidth/7)},
            { type: 'text', title:'Belongs to Sub-Assemblies;', width:(dataWidth/7)},
            { type: 'text', title:'Children of Sub-Assembly;',  width:(dataWidth/7)},
        ],
        updateTable:function(instance, cell, col, row, val, label, cellName) {
/*
            // Number formating
            if (col == 3) {
                // Get text
                txt = cell.innerText;
                // Format text
                txt = numeral(txt).format('0,0.00');
                // Update cell value
                cell.innerHTML = '$ ' + txt;
            }                
*/

            cell.innerHTML = row + ',' + col;
            // Odd row colours
            if (row % 2) {
            //    cell.style.backgroundColor = '#edf3ff';
                    cell.style.backgroundColor = 'rgba(255,153,0,0.15)';            
            } else {
                    cell.style.backgroundColor = 'rgba(12,98,245,0.15)';            

            }
            // Total row
            if (row == 13) {
                if (col < 3) {
                    cell.innerHTML = '';
                } 

                if (col == 2) {
                    cell.innerHTML = 'Total';
                    cell.style.fontWeight = 'bold';
                }

                cell.className = '';
                cell.style.backgroundColor = '#f46e42';
                cell.style.color = '#ffffff';
            }   
        }
    });
    
//This is kept in for reference but is not a recommended styling method
/*
    style_obj = { 
        A1:'text-align:centre; font-weight:12; background-color:grey; color:white; text-decoration:italic;', 
        B1:'text-align:centre; font-weight:12; background-color:grey; color:white; text-decoration:italic;',
    }
    
    table.setStyle(style_obj)
*/
//Useful color values
/*
    colours:
    orange rgb(255,153,0) #ff9900
    blue rgb(12,98,245) #0c62f5
    ubuntu Hughlight f46e42
    ubuntu orange #ba382f
    ubuntu purple #8942a8
*/

});


