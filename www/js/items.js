/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */ 

var items = getItems();
var numItems = countItems();

function getItems() {
	if (localStorage.items == undefined) {
		items = {item1: {name : 'Item 1',
						 status : 'on', 
						 image : "img/DeviceIcons/MacBook.png",
						 hasSchedule : 'yes',
						 "fullschedule":[
							{"day":"Mon","times":[
								{"type":"on","time":4.510288065843621},
								{"type":"off","time":14.45267489711934}]
							},
							{"day":"Tue","times":[
								{"type":"on","time":9.613168724279836},
								{"type":"off","time":15.440329218106996}]
							},
							{"day":"Wed","times":[]},
							{"day":"Thu","times":[]},
							{"day":"Fri","times":[]},
							{"day":"Sat","times":[]},
							{"day":"Sun","times":[]}
							],
						deviceLocation : 'Room A'
				},
				};
	} else {
		items = JSON.parse(localStorage.items);
	}
	
	return items;
}

function countItems() {
	var size = 0, key;
    for (key in items) {
        if (items.hasOwnProperty(key)) size++;
    }
    return size;
}

function newItem(id, itemName, imageLink, location) {

	items[id] = {name : itemName,
				status : 'off', 
				image : imageLink,
				hasSchedule : 'no',
				schedule : {monday: [],
							tuesday: [], 
							wednesday:[], 
							thursday:[], 
							friday:[], 
							saturday:[], 
							sunday:[]
							},
				deviceLocation: location
				};
	
}

function removeItem(id) {
	delete items[id];
}

function removeCurrentSchedule() {
	if (localStorage.getItem('currentSchedule') != null) {
		localStorage.removeItem('currentSchedule');
	}	
}


