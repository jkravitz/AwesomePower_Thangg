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

function getItems() {
	if (localStorage.items == undefined) {
		items = {item1: {name : 'Item 1',
						 status : 'on', 
						 image : "imageLink",
						 schedule : {monday: ['08.00','09.00','12.00','14.00'],
									 tuesday: [], 
									 wednesday:[], 
									 thursday:[], 
									 friday:[], 
									 saturday:[], 
									 sunday:[]
									 }
						},
				 item2: {name : 'Item 2',
						 status : 'on', 
						 image : "imageLink",
						 schedule : {monday: [],
									 tuesday: ['09.00','13.00','16.00','23.00'], 
									 wednesday:[], 
									 thursday:[], 
									 friday:[], 
									 saturday:[], 
									 sunday:[]
									 }
						},
				 item3: {name : 'Item 3',
						 status : 'on', 
						 image : "imageLink",
						 schedule : {monday: ['08.00','09.00','12.00','14.00'],
									 tuesday: [], 
									 wednesday:[], 
									 thursday:[], 
									 friday:[], 
									 saturday:[], 
									 sunday:[]
									 }
						},
				 item4: {name : 'Item 4',
						 status : 'on', 
						 image : "imageLink",
						 schedule : {monday: ['08.00','09.00','12.00','14.00'],
									 tuesday: [], 
									 wednesday:[], 
									 thursday:[], 
									 friday:[], 
									 saturday:[], 
									 sunday:[]
									 }
						},
				 item5: {name : 'Item 5',
						 status : 'on', 
						 image : "imageLink",
						 schedule : {monday: ['08.00','09.00','12.00','14.00'],
									 tuesday: [], 
									 wednesday:[], 
									 thursday:[], 
									 friday:[], 
									 saturday:[], 
									 sunday:[]
									 }
						},
				 item6: {name : 'Item 6',
						 status : 'on', 
						 image : "imageLink",
						 schedule : {monday: ['08.00','09.00','12.00','14.00'],
									 tuesday: [], 
									 wednesday:[], 
									 thursday:[], 
									 friday:[], 
									 saturday:[], 
									 sunday:[]
									 }
						}
				};
	} else {
		items = JSON.parse(localStorage.items);
	}
	
	return items;
}



