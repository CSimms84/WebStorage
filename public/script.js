// public/script.js
// Local Storage
function setLocalStorage() {
    const data = document.getElementById('localStorageInput').value;
    localStorage.setItem('testData', data);
    alert('Data set in Local Storage');
}

function getLocalStorage() {
    const data = localStorage.getItem('testData');
    document.getElementById('localStorageOutput').textContent = data || 'No data found';
}

// Session Storage
function setSessionStorage() {
    const data = document.getElementById('sessionStorageInput').value;
    sessionStorage.setItem('testData', data);
    alert('Data set in Session Storage');
}

function getSessionStorage() {
    const data = sessionStorage.getItem('testData');
    document.getElementById('sessionStorageOutput').textContent = data || 'No data found';
}

// IndexedDB
const dbPromise = idb.openDB('TestDB', 1, {
    upgrade(db) {
        db.createObjectStore('testStore');
    },
});

async function setIndexedDB() {
    const data = document.getElementById('indexedDBInput').value;
    const db = await dbPromise;
    await db.put('testStore', data, 'testKey');
    alert('Data set in IndexedDB');
}

async function getIndexedDB() {
    const db = await dbPromise;
    const data = await db.get('testStore', 'testKey');
    document.getElementById('indexedDBOutput').textContent = data || 'No data found';
}

// Cookies
function setCookie() {
    const data = document.getElementById('cookieInput').value;
    document.cookie = `testData=${data}; max-age=3600`;
    alert('Cookie set');
}

function getCookie() {
    const name = 'testData=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            document.getElementById('cookieOutput').textContent = cookie.substring(name.length, cookie.length);
            return;
        }
    }
    document.getElementById('cookieOutput').textContent = 'No cookie found';
}

// Cache Storage
async function setCache() {
    const url = document.getElementById('cacheInput').value;
    const cache = await caches.open('testCache');
    await cache.add(url);
    alert('URL cached');
}

async function getCache() {
    const cache = await caches.open('testCache');
    const keys = await cache.keys();
    const urls = keys.map(request => request.url);
    document.getElementById('cacheOutput').textContent = urls.join(', ') || 'No cached URLs found';
}