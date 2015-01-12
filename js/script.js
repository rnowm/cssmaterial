document.addEventListener('polymer-ready', function(){
  var myToolbar = document.getElementById('toolbar');
  var colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue',
                'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime',
                'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey',
                'blue-grey']
  var rndval = colors[Math.floor(Math.random() * colors.length)];
  myToolbar.setAttribute('color', rndval);
});