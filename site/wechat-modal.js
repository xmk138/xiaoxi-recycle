(() => {
  const dialog = document.querySelector('#wechatDialog');
  if (!dialog) return;

  const openDialog = event => {
    event?.preventDefault();
    if (!dialog.open) dialog.showModal();
  };
  document.querySelectorAll('.wechat-open').forEach(button => button.addEventListener('click', openDialog));
  document.addEventListener('click', event => {
    if (event.target.closest('.wechat-open')) openDialog(event);
  });

  const account = document.querySelector('#visit .visit-details small');
  if (account?.textContent.includes('微信')) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'wechat-inline wechat-open';
    button.textContent = account.textContent.trim();
    button.addEventListener('click', openDialog);
    account.replaceWith(button);
  }

  dialog.querySelector('.wechat-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
})();
