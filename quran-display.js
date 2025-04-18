// Quran display functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle page navigation in pages.html
    const currentPageEl = document.getElementById('current-page');
    const currentPageBottomEl = document.getElementById('current-page-bottom');
    const quranPageEl = document.getElementById('quran-page');
    
    if (currentPageEl && quranPageEl) {
        // Initialize page navigation
        let currentPage = 1;
        const totalPages = 604;
        
        function updatePage(pageNum) {
            currentPage = pageNum;
            
            // Update page number display
            if (currentPageEl) currentPageEl.textContent = currentPage;
            if (currentPageBottomEl) currentPageBottomEl.textContent = currentPage;
            
            // Update image source - use HTML files for demo
            const pageNumFormatted = String(currentPage).padStart(3, '0');
            
            // Check if we have the specific page, otherwise use page001 or page002 as fallback
            if (currentPage <= 2) {
                quranPageEl.src = `../images/pages/page${pageNumFormatted}.html`;
            } else {
                // For demo purposes, alternate between the two sample pages
                const samplePage = currentPage % 2 === 0 ? '002' : '001';
                quranPageEl.src = `../images/pages/page${samplePage}.html`;
            }
        }
        
        // Event listeners for navigation buttons
        const prevBtns = document.querySelectorAll('#prev-page, #prev-page-bottom');
        const nextBtns = document.querySelectorAll('#next-page, #next-page-bottom');
        
        prevBtns.forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => {
                    if (currentPage > 1) {
                        updatePage(currentPage - 1);
                    }
                });
            }
        });
        
        nextBtns.forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => {
                    if (currentPage < totalPages) {
                        updatePage(currentPage + 1);
                    }
                });
            }
        });
        
        // Initialize with page 1
        updatePage(1);
    }
    
    // Load more surahs functionality
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real implementation, this would load more surahs
            // For demo purposes, just show an alert
            alert('سيتم تحميل المزيد من السور في التطبيق الكامل');
        });
    }
});
