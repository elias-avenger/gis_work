// Shared UI/UX logic for GIS Workbench

// Sidebar toggle (for mobile)
document.addEventListener('DOMContentLoaded', function() {
    var sidebarToggle = document.querySelector('.sidebar-toggle');
    var sidebar = document.querySelector('.sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }

    // Highlight current page in sidebar
    var path = window.location.pathname.split('/').pop();
    var navMap = {
        'index.html': 'nav-home',
        'features_within_polygon.html': 'nav-features',
        'polygons_csv_geojson.html': 'nav-csv',
        'gps_points_csv_geojson.html': 'nav-gps',
        'detect_overlaps.html': 'nav-overlaps'
    };
    if (path === '' || path === 'index.html') {
        const homeLink = document.getElementById('nav-home');
        if (homeLink) homeLink.classList.add('active');
    } else {
        const navId = navMap[path];
        if (navId) {
            const navLink = document.getElementById(navId);
            if (navLink) navLink.classList.add('active');
        }
    }
});
