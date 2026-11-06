import type { Product } from "@/content";

/**
 * Full price struck through beside the pre-order price.
 * Size and tracking come from `className`; the struck price is half that size.
 */
export function Price({
  product,
  className,
  mutedClassName = "text-slate",
  unitClassName,
}: {
  product: Product;
  className: string;
  mutedClassName?: string;
  unitClassName?: string;
}) {
  return (
    <p className={`font-extrabold ${className}`}>
      <span className="sr-only">Full price </span>
      <s className={`mr-[10px] text-[0.5em] font-semibold tracking-normal ${mutedClassName}`}>
        {product.fullPrice}
      </s>
      <span className="sr-only">Pre-order price </span>
      {product.preorderPrice}
      {product.unit && (
        <span className={`font-semibold tracking-normal ${mutedClassName} ${unitClassName ?? ""}`}>
          {product.unit}
        </span>
      )}
    </p>
  );
}
