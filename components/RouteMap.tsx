import { useTranslation } from "next-i18next";

type RouteMapProps = {
  className?: string;
};

const RouteMap = ({ className }: RouteMapProps) => {
  const { t } = useTranslation();
  return (
    <svg
      fill="none"
      strokeLinejoin="round"
      version="1.1"
      viewBox="0 0 1280 720"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g strokeWidth="8">
        <path d="m404 556 476-476h240" stroke="#338000" strokeWidth="24" />
        <path d="m408 560-40 40h-184l-16 16v64" stroke="#3ca75a" />
        <path d="m160 680v-360l-120-120" stroke="#a37407" />
        <path d="m416 568 48-48h776" stroke="#581ebb" />
        <path d="m40 600h96l16 16v24" stroke="#d75c84" />
      </g>
      <g fill="#fff" strokeWidth="2">
        <g>
          <circle cx="480" cy="480" r="10" />
          <circle cx="548" cy="412" r="10" />
          <circle cx="608" cy="352" r="10" />
          <circle cx="740" cy="220" r="10" />
          <circle cx="880" cy="80" r="10" />
          <circle cx="1024" cy="80" r="10" />
        </g>
        <g stroke="#338000" strokeWidth="4">
          <circle cx="404" cy="564" r="20" />
          <circle cx="664" cy="296" r="20" />
          <circle cx="1120" cy="80" r="20" />
        </g>
        <g stroke="#333">
          <circle cx="120" cy="280" r="6" />
          <circle cx="160" cy="440" r="6" />
          <circle cx="160" cy="564" r="6" />
          <circle cx="160" cy="640" r="20" />
          <circle cx="800" cy="520" r="6" />
          <circle cx="1120" cy="520" r="6" />
        </g>
      </g>
      <g fill="#333" xmlSpace="preserve" fontSize="44px" textAnchor="end">
        <g textAnchor="start">
          <text x="336" y="112" fontSize="28px">{t("company.name")}</text>
          <text x="336" y="168" fontSize="52px" fill="#338000">
            {t("_line", { name: t("wazuka") })}
          </text>
          <text x="280" y="680" fontSize="36px" fill="#0055d4">
            {t("jrKansaiLines")}
          </text>
        </g>
        <text x="188" y="652" textAnchor="start">{t("sta.kizu")}</text>
        <text x="372" y="572">{t("sta.kamo")}</text>
        <text x="448" y="492">{t("sta.ibirao")}</text>
        <text x="516" y="424">{t("sta.ishitera")}</text>
        <text x="576" y="364">{t("sta.shirasu")}</text>
        <text x="632" y="308">{t("sta.wazuka")}</text>
        <text x="712" y="228">{t("sta.harayama")}</text>
        <text x="848" y="92">{t("sta.yubune")}</text>
        <text x="1024" y="136" textAnchor="middle">
          {t("sta.higashiYubune")}
        </text>
        <text x="1120" y="52" textAnchor="middle">{t("sta.sunakodani")}</text>
        <g fontSize="28px">
          <text x="16" y="184" textAnchor="start">
            {t("_to", { sta: t("sta.kyoto") })}
          </text>
          <text x="160" y="704" textAnchor="middle">
            {t("_to", { sta: t("sta.nara") })}
          </text>
          <text x="1264" y="552">{t("_to", { sta: t("sta.kameyama") })}</text>
        </g>
      </g>
    </svg>
  );
};

export default RouteMap;
