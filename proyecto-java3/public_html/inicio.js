/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var json = {"my": "https://data.cdc.gov/resource/dwqk-w36f.json?total_cases_reported_2015=5.json"};
d3.json(json, function(json) {
    root = json;
    root.x0 = h / 2;
    root.y0 = 0;
});