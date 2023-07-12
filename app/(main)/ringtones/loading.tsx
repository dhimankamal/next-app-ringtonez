import GroupRingtoneSkelton from "@lib/components/skelton/GroupRingtoneSkelton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="">
      <GroupRingtoneSkelton number={50} />
    </div>
  );
}
