let html;
html = `Our client, ${customer.firstname} ${customer.lastname}, is due to arrive on ${customer.length_of_stay.check_in_date} at ${customer.length_of_stay.late_checkin}.  Mr. ${customer.lastname} is a ${customer.loyalty_status} member and is a frequent client, who will be staying with us until ${customer.length_of_stay.check_out_date}.  Mr. ${customer.firstname}'s room is to be ${customer.room_type.room_facing} facing  with ${customer.room_type.bed_type [2]} and the following requirements: a ${customer.room_type.bed_type [0]} bed with ${customer.room_type.bed_type [1]} and, of course, a ${customer.room_type.bed_type [3]} on his pillow.  Mr. ${customer.lastname} comess all the way down there from his hometown: the ${customer.address.city}.  He works very hard so ${customer.room_type.wakeup_call}.  Any phone messages for Mr. ${customer.lastname} should be forwarded to his email: ${customer.email}.`

 console.log (html)
 document.body.innerHTML=html;
