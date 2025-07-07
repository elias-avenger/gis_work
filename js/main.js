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
        'gps_points_csv_geojson.html': 'nav-gps'
    };
    if (path === '' || path === 'index.html') {
        document.getElementById('nav-home')?.classList.add('active');
    } else if (navMap[path]) {
        document.getElementById(navMap[path])?.classList.add('active');
    }
});
