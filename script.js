// JavaScript function to toggle academic and curriculum content visibility
function toggleContent(contentId) {
    
    var content = document.getElementById(contentId);
    console.log(content)
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}