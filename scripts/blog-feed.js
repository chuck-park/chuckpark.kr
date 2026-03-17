(function () {
  const lists = Array.from(document.querySelectorAll('[data-blog-feed-list]'));
  if (!lists.length) return;

  const FEED_URL = 'https://blog.chuckpark.kr/feed.xml';

  const stripHtml = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html || '';
    return (div.textContent || div.innerText || '').trim();
  };

  const formatDate = (value) => {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const renderItem = (item) => {
    const title = item.querySelector('title')?.textContent?.trim() || '제목 없음';
    const link = item.querySelector('link')?.textContent?.trim() || 'https://blog.chuckpark.kr';
    const descriptionRaw = item.querySelector('description')?.textContent || '';
    const description = stripHtml(descriptionRaw).slice(0, 110);
    const pubDate = item.querySelector('pubDate')?.textContent || '';

    const article = document.createElement('article');
    article.className = 'article-small';
    article.innerHTML = `
      <h3><a href="${link}" target="_blank" rel="noreferrer">${title}</a></h3>
      <p>${description || '요약 없음'}</p>
      <div class="article-meta">${formatDate(pubDate)}</div>
    `;
    return article;
  };

  fetch(FEED_URL)
    .then((res) => {
      if (!res.ok) throw new Error('feed fetch failed');
      return res.text();
    })
    .then((xmlText) => {
      const xml = new DOMParser().parseFromString(xmlText, 'text/xml');
      const items = Array.from(xml.querySelectorAll('item'));

      if (!items.length) {
        throw new Error('no items');
      }

      lists.forEach((list) => {
        const limit = Number(list.dataset.limit || 3);
        const status = list.parentElement?.querySelector('[data-blog-feed-status]');
        const fragment = document.createDocumentFragment();

        items.slice(0, limit).forEach((item) => fragment.appendChild(renderItem(item)));
        list.innerHTML = '';
        list.appendChild(fragment);
        if (status) status.remove();
      });
    })
    .catch(() => {
      lists.forEach((list) => {
        const status = list.parentElement?.querySelector('[data-blog-feed-status]');
        if (status) {
          status.innerHTML = '<a href="https://blog.chuckpark.kr" target="_blank" rel="noreferrer">최신 글은 blog.chuckpark.kr에서 확인해주세요 →</a>';
        }
      });
    });
})();
