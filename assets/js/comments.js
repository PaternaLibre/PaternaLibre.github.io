$(document).ready(function() {
    // Disqus comments configuration
    var disqus_config = function () {
        this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = window.location.pathname; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://paterna-del-campo.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
    
    // Alternative comment system if Disqus is not available
    if (typeof DISQUS === 'undefined') {
        $('#disqus_thread').html(`
            <div class="comments-fallback">
                <h3>Comentarios</h3>
                <p>El sistema de comentarios no está disponible actualmente. Puedes compartir tu opinión en nuestras redes sociales o enviándonos un correo electrónico.</p>
                <div class="social-comments">
                    <a href="https://facebook.com" target="_blank" class="social-btn"><i class="fab fa-facebook-f"></i> Facebook</a>
                    <a href="https://twitter.com" target="_blank" class="social-btn"><i class="fab fa-twitter"></i> Twitter</a>
                    <a href="mailto:contacto@paternadelcampo.info" class="social-btn"><i class="fas fa-envelope"></i> Email</a>
                </div>
            </div>
        `);
        
        // Add CSS for fallback comments
        $('<style>')
            .text(`
                .comments-fallback {
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    padding: 30px;
                    text-align: center;
                }
                
                .social-comments {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-top: 20px;
                }
                
                .social-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background-color: var(--primary-color);
                    color: white;
                    border-radius: 4px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                
                .social-btn:hover {
                    background-color: var(--accent-color);
                    transform: translateY(-3px);
                }
            `)
            .appendTo('head');
    }
});