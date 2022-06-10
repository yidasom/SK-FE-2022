import classNames from 'classnames';

export const ReloadButton = ({
  type = 'button',
  className = '',
  onReload,
  ...restProps
}) => {
  return (
    <button
      type={type}
      className={classNames('reloadButton', className)}
      // onClick={onReload}
      onClick={() => onReload?.()}
      {...restProps}
    />
  );
};
