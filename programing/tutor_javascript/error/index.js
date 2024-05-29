// try {
//     JSON.parse("{ bad json o_O }");
//   } catch (e) {
//     alert(e.name); // SyntaxError
//     alert(e.message); // Unexpected token o in JSON at position 2
//   }
  
//   // As we can see, that’s a SyntaxError.
//   // And in our case, the absence of name is an error, as users must have a name.
//   // So let’s throw it:
  
//   let json = '{ "age": 30 }'; // incomplete data
  
//   try {
//     let user = JSON.parse(json); // <-- no errors
  
//     if (!user.name) {
//       throw new SyntaxError("Incomplete data: no name"); // (*)
//     }
  
//     alert(user.name);
//   } catch (e) {
//     alert("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
//   }