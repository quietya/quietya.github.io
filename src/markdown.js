import html2pdf from "html2pdf.js";

export const printer = (element) => {
  const opt = (element) => {
    return {
      filename: "我的简历.pdf",
      margin: 0,
      pagebreak: { mode: "css", after: ".break-point" },
      image: { type: "jpeg", quality: 0.98 },
      enableLinks: true,
      html2canvas: { dpi: 90, scale: 1, letterRendering: true },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true,
        marginLeft: 0,
        marginTop: 100,
      },
      noPdfOpenParams: true,
    };
  };

  html2pdf(element);

  console.log("end----")
};
