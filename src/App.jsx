import React, { useState, useEffect } from 'react';

// Custom SVG Icons
const IconWrapper = ({ children, className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);

const UserCheck = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 11l2 2 4-4" />
  </IconWrapper>
);

const BookOpen = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </IconWrapper>
);

const Users = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </IconWrapper>
);

const Calendar = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 3V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </IconWrapper>
);

const Plus = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </IconWrapper>
);

const Trash2 = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </IconWrapper>
);

const Printer = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
  </IconWrapper>
);

const LogOut = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </IconWrapper>
);

const Eye = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </IconWrapper>
);

const EyeOff = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.025 10.025 0 012.122-.063c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21M3 3l18 18" />
  </IconWrapper>
);

const Star = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </IconWrapper>
);

const Sparkles = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </IconWrapper>
);

const Award = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15l-2 5l2-1.5L14 20l-2-5m0 0a6 6 0 100-12 6 6 0 000 12z" />
  </IconWrapper>
);

const FileText = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </IconWrapper>
);

const XCircle = ({ className }) => (
  <IconWrapper className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </IconWrapper>
);

const getLocalData = (key, defaultVal) => {
  try {
    const item = localStorage.getItem('mandarin_kids_' + key);
    return item ? JSON.parse(item) : defaultVal;
  } catch (e) {
    return defaultVal;
  }
};

const setLocalData = (key, val) => {
  try {
    localStorage.setItem('mandarin_kids_' + key, JSON.stringify(val));
  } catch (e) {}
};

export default function App() {
  useEffect(() => {
    if (!document.getElementById('tailwind-cdn')) {
      const script = document.createElement('script');
      script.id = 'tailwind-cdn';
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, []);

  const [authRole, setAuthRole] = useState(null);
  const [activeParentStudentId, setActiveParentStudentId] = useState(null);
  
  const [loginType, setLoginType] = useState('guru');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [students, setStudents] = useState(() => getLocalData('students', [
    { id: 'std_demo_1', name: 'Budi Santoso', parentEmail: 'budi@gmail.com', parentPassword: 'Budi123' },
    { id: 'std_demo_2', name: 'Siti Rahma', parentEmail: 'siti@gmail.com', parentPassword: 'Siti123' }
  ]));
  
  const [attendance, setAttendance] = useState(() => getLocalData('attendance', [
    {
      id: 'att_demo_1',
      studentId: 'std_demo_1',
      date: new Date().toISOString().split('T')[0],
      status: 'hadir',
      notes: 'Datang tepat waktu'
    },
    {
      id: 'att_demo_2',
      studentId: 'std_demo_2',
      date: new Date().toISOString().split('T')[0],
      status: 'hadir',
      notes: 'Sangat aktif'
    }
  ]));

  const [reports, setReports] = useState(() => getLocalData('reports', [
    {
      id: 'rep_demo_1',
      studentId: 'std_demo_1',
      date: new Date().toISOString().split('T')[0],
      topic: 'Bab 1 - Salam & Memperkenalkan Diri (问候与自我介绍)',
      vocab: [
        { hanzi: '你好', pinyin: 'nǐ hǎo', arti: 'Halo / Apa kabar' },
        { hanzi: '谢谢', pinyin: 'xiè xie', arti: 'Terima kasih' },
        { hanzi: '再见', pinyin: 'zài jiàn', arti: 'Sampai jumpa' }
      ],
      sentences: [
        '你好！我叫 Budi。(Nǐ hǎo! Wǒ jiào Budi - Halo! Nama saya Budi.)',
        '很高兴认识你。(Hěn gāoxìng rènshí nǐ - Senang berkenalan denganmu.)'
      ],
      comprehension: 5,
      practiceScore: 95,
      teacherNotes: 'Budi sangat antusias mengikuti kelas private. Pengucapan Pinyin nada 3 sudah jauh lebih stabil!',
      nextPlan: 'Lanjut ke Bab 2: Anggota Keluarga (家庭成员).'
    }
  ]));

  const [activeTab, setActiveTab] = useState('reports');
  const [selectedStudentId, setSelectedStudentId] = useState(students[0]?.id || '');
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [printReportData, setPrintReportData] = useState(null);

  const [newStudentName, setNewStudentName] = useState('');
  const [newParentEmail, setNewParentEmail] = useState('');
  const [newParentPassword, setNewParentPassword] = useState('');

  const [reportDate, setReportDate] = useState(new Date().toISOString().split('T')[0]);
  const [reportTopic, setReportTopic] = useState('');
  const [vocabList, setVocabList] = useState([{ hanzi: '', pinyin: '', arti: '' }]);
  const [sentenceList, setSentenceList] = useState(['']);
  const [comprehensionScore, setComprehensionScore] = useState(5);
  const [practiceScore, setPracticeScore] = useState(90);
  const [teacherNotes, setTeacherNotes] = useState('');
  const [nextPlan, setNextPlan] = useState('');

  const [attStudentId, setAttStudentId] = useState(students[0]?.id || '');
  const [attDate, setAttDate] = useState(new Date().toISOString().split('T')[0]);
  const [attStatus, setAttStatus] = useState('hadir');
  const [attNotes, setAttNotes] = useState('');

  const [parentActiveTab, setParentActiveTab] = useState('reports');

  useEffect(() => { setLocalData('students', students); }, [students]);
  useEffect(() => { setLocalData('attendance', attendance); }, [attendance]);
  useEffect(() => { setLocalData('reports', reports); }, [reports]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    if (loginType === 'guru') {
      if (inputPassword === 'Baobao123_') {
        setAuthRole('guru');
        setActiveParentStudentId(null);
      } else {
        setLoginError('Password Guru salah. Silakan periksa kembali!');
      }
    } else {
      const matchedStudent = students.find(
        s => s.parentEmail.toLowerCase() === inputEmail.toLowerCase() && s.parentPassword === inputPassword
      );

      if (matchedStudent) {
        setAuthRole('ortu');
        setActiveParentStudentId(matchedStudent.id);
        setSelectedStudentId(matchedStudent.id);
      } else {
        setLoginError('Email atau Password Orang Tua tidak ditemukan.');
      }
    }
  };

  const handleLogout = () => {
    setAuthRole(null);
    setActiveParentStudentId(null);
    setInputEmail('');
    setInputPassword('');
    setLoginError('');
  };

  const saveStudent = (e) => {
    e.preventDefault();
    if (!newStudentName || !newParentEmail || !newParentPassword) return;

    const newId = 'std_' + Date.now();
    const studentData = {
      id: newId,
      name: newStudentName,
      parentEmail: newParentEmail,
      parentPassword: newParentPassword,
      createdAt: new Date().toISOString()
    };

    const updated = [...students, studentData];
    setStudents(updated);
    
    setNewStudentName('');
    setNewParentEmail('');
    setNewParentPassword('');
    setShowAddStudentModal(false);
    setSelectedStudentId(newId);
    setAttStudentId(newId);
  };

  const deleteStudent = (id) => {
    if (confirm('Yakin ingin menghapus data murid ini?')) {
      setStudents(students.filter(s => s.id !== id));
      setReports(reports.filter(r => r.studentId !== id));
      setAttendance(attendance.filter(a => a.id !== id));
      if (selectedStudentId === id) {
        setSelectedStudentId(students.find(s => s.id !== id)?.id || '');
      }
    }
  };

  const saveReport = (e) => {
    e.preventDefault();
    if (!selectedStudentId || !reportTopic) return;

    const newReport = {
      id: 'rep_' + Date.now(),
      studentId: selectedStudentId,
      date: reportDate,
      topic: reportTopic,
      vocab: vocabList.filter(v => v.hanzi.trim() !== ''),
      sentences: sentenceList.filter(s => s.trim() !== ''),
      comprehension: Number(comprehensionScore),
      practiceScore: Number(practiceScore),
      teacherNotes,
      nextPlan,
      createdAt: new Date().toISOString()
    };

    setReports([newReport, ...reports]);
    setReportTopic('');
    setVocabList([{ hanzi: '', pinyin: '', arti: '' }]);
    setSentenceList(['']);
    setTeacherNotes('');
    setNextPlan('');
    alert('✅ Laporan Les Private berhasil disimpan!');
  };

  const saveManualAttendance = (e) => {
    e.preventDefault();
    if (!attStudentId || !attDate) return;

    const newAtt = {
      id: 'att_' + Date.now(),
      studentId: attStudentId,
      date: attDate,
      status: attStatus,
      notes: attNotes,
      createdAt: new Date().toISOString()
    };

    setAttendance([newAtt, ...attendance]);
    setAttNotes('');
    alert('✅ Presensi les private murid berhasil dicatat!');
  };

  const deleteAttendanceRecord = (id) => {
    if (confirm('Hapus catatan absensi ini?')) {
      setAttendance(attendance.filter(a => a.id !== id));
    }
  };

  const addVocabRow = () => setVocabList([...vocabList, { hanzi: '', pinyin: '', arti: '' }]);
  const removeVocabRow = (idx) => setVocabList(vocabList.filter((_, i) => i !== idx));
  const updateVocab = (idx, field, val) => {
    const updated = [...vocabList];
    updated[idx][field] = val;
    setVocabList(updated);
  };

  const addSentenceRow = () => setSentenceList([...sentenceList, '']);
  const removeSentenceRow = (idx) => setSentenceList(sentenceList.filter((_, i) => i !== idx));
  const updateSentence = (idx, val) => {
    const updated = [...sentenceList];
    updated[idx] = val;
    setSentenceList(updated);
  };

  if (printReportData) {
    const studentInfo = students.find(s => s.id === printReportData.studentId) || { name: 'Murid' };
    return (
      <div className="min-h-screen bg-stone-100 p-4 md:p-10 text-stone-800 flex flex-col items-center">
        <div className="w-full max-w-[21cm] mb-6 flex justify-between items-center print:hidden">
          <button onClick={() => setPrintReportData(null)} className="px-4 py-2 bg-stone-200 hover:bg-stone-300 rounded-xl text-xs font-semibold cursor-pointer">
            ← Kembali ke Dashboard
          </button>
          <button onClick={() => window.print()} className="px-6 py-2.5 bg-[#8A9A86] text-white font-medium rounded-xl shadow-md flex items-center gap-2 cursor-pointer text-xs">
            <Printer className="w-4 h-4" /> Cetak / Simpan PDF (A4)
          </button>
        </div>

        <div className="w-full max-w-[21cm] min-h-[29.7cm] bg-[#FEFAE0] p-10 md:p-12 shadow-xl rounded-lg font-sans border border-stone-200 print:shadow-none print:m-0 print:w-full print:border-none">
          <div className="border-b-2 border-[#8A9A86] pb-6 mb-6 flex justify-between items-end">
            <div>
              <div className="inline-block bg-[#8A9A86] text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-2">
                宝贝中文 · Private Mandarin Kids
              </div>
              <h1 className="text-xl font-bold text-stone-800">Laporan Hasil Belajar Les Private</h1>
              <p className="text-stone-500 text-xs">Kemajuan Bahasa Mandarin Anak</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-stone-500">Tanggal Pertemuan</p>
              <p className="text-sm font-semibold text-[#8A9A86]">{printReportData.date}</p>
            </div>
          </div>

          <div className="bg-white/80 p-4 rounded-xl border border-stone-200/80 mb-6 flex justify-between items-center">
            <div>
              <p className="text-[11px] text-stone-400 font-medium">Nama Murid</p>
              <p className="text-lg font-bold text-stone-800">{studentInfo.name}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-stone-400 font-medium">Materi Les</p>
              <p className="text-sm font-semibold text-stone-700">{printReportData.topic}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xs font-bold text-stone-700 uppercase mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#8A9A86]" /> Kosakata Baru (生词)
            </h2>
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#8A9A86]/10 text-stone-700 font-semibold border-b border-stone-200">
                  <tr>
                    <th className="p-3 w-1/3">Hanzi (汉字)</th>
                    <th className="p-3 w-1/3">Pinyin (拼音)</th>
                    <th className="p-3 w-1/3">Arti</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {printReportData.vocab && printReportData.vocab.length > 0 ? (
                    printReportData.vocab.map((v, i) => (
                      <tr key={i}>
                        <td className="p-3 font-medium text-base text-stone-800">{v.hanzi}</td>
                        <td className="p-3 text-stone-600 font-mono">{v.pinyin}</td>
                        <td className="p-3 text-stone-700">{v.arti}</td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan="3" className="p-3 text-center text-stone-400 text-xs">Tidak ada kosakata baru</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xs font-bold text-stone-700 uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8A9A86]" /> Pola Kalimat / Praktik (句型)
            </h2>
            <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
              {printReportData.sentences && printReportData.sentences.length > 0 ? (
                printReportData.sentences.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                    <span className="w-4 h-4 rounded-full bg-[#8A9A86]/20 text-[#8A9A86] font-bold text-[10px] flex items-center justify-center shrink-0">{i + 1}</span>
                    <p>{s}</p>
                  </div>
                ))
              ) : (
                <p className="text-stone-400 text-xs italic">Tidak ada latihan kalimat</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <h3 className="text-[11px] font-bold text-stone-500 uppercase mb-2">Tingkat Pemahaman Anak</h3>
                <div className="flex items-center gap-1.5 my-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-5 h-5 ${star <= printReportData.comprehension ? 'text-amber-400 fill-amber-400' : 'text-stone-200'}`} />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-stone-700">{printReportData.comprehension} / 5</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-stone-200">
                <h3 className="text-[11px] font-bold text-stone-500 uppercase mb-1">Nilai Latihan Private</h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 rounded-xl bg-[#8A9A86] text-white flex items-center justify-center font-bold text-base">
                    {printReportData.practiceScore ?? '-'}
                  </div>
                  <div>
                    <p className="text-[11px] text-stone-500">Skor Sesi Ini</p>
                    <p className="text-xs font-semibold text-[#8A9A86]">
                      {(printReportData.practiceScore ?? 0) >= 85 ? '🌟 Sangat Baik' : (printReportData.practiceScore ?? 0) >= 70 ? '👍 Baik' : '💪 Perlu Latihan'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col justify-between">
              <div>
                <h3 className="text-[11px] font-bold text-stone-500 uppercase mb-2">Catatan Evaluasi Guru</h3>
                <p className="text-xs text-stone-700 whitespace-pre-line">{printReportData.teacherNotes || 'Tidak ada catatan tambahan.'}</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-900/5 p-4 rounded-xl border border-emerald-900/10 mb-6">
            <h3 className="text-[11px] font-bold text-[#8A9A86] uppercase mb-1">Rencana Sesi Berikutnya / PR</h3>
            <p className="text-xs text-stone-700 font-medium">{printReportData.nextPlan || 'Akan disampaikan pada sesi berikutnya.'}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!authRole) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 font-sans text-stone-800" style={{ backgroundColor: '#FEFAE0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden" style={{ backgroundColor: '#ffffff', borderRadius: '1.5rem', maxWidth: '22rem', width: '100%' }}>
          <div className="p-6 text-center text-white relative" style={{ backgroundColor: '#8A9A86', textAlign: 'center', color: '#ffffff' }}>
            <div className="w-12 h-12 bg-white/20 rounded-2xl mx-auto flex items-center justify-center text-2xl mb-2" style={{ width: '3rem', height: '3rem', margin: '0 auto 0.5rem auto', display: 'flex', itemsCenter: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
              🐼
            </div>
            <h1 className="text-xl font-bold" style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0 }}>宝贝中文</h1>
            <p className="text-emerald-100 text-[11px] mt-0.5" style={{ color: '#E6F4EA', fontSize: '0.7rem' }}>Laporan & Absensi Les Private Mandarin</p>
          </div>

          <div className="p-5" style={{ padding: '1.25rem' }}>
            <div className="flex p-1 rounded-xl mb-4 border border-stone-200" style={{ display: 'flex', backgroundColor: '#f5f5f4', padding: '0.25rem', borderRadius: '0.75rem', marginBottom: '1rem' }}>
              <button onClick={() => { setLoginType('guru'); setLoginError(''); }} className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5`} style={{ flex: 1, padding: '0.5rem 0', borderRadius: '0.5rem', fontSize: '0.75rem', cursor: 'pointer', border: 'none', backgroundColor: loginType === 'guru' ? '#ffffff' : 'transparent', color: loginType === 'guru' ? '#8A9A86' : '#78716c', fontWeight: 'bold' }}>
                <UserCheck className="w-3.5 h-3.5" /> Guru
              </button>
              <button onClick={() => { setLoginType('ortu'); setLoginError(''); }} className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5`} style={{ flex: 1, padding: '0.5rem 0', borderRadius: '0.5rem', fontSize: '0.75rem', cursor: 'pointer', border: 'none', backgroundColor: loginType === 'ortu' ? '#ffffff' : 'transparent', color: loginType === 'ortu' ? '#8A9A86' : '#78716c', fontWeight: 'bold' }}>
                <Users className="w-3.5 h-3.5" /> Orang Tua
              </button>
            </div>

            {loginError && (
              <div className="mb-3 p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2" style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3', color: '#be123c', padding: '0.625rem', borderRadius: '0.75rem', fontSize: '0.7rem', marginBottom: '0.75rem', display: 'flex' }}>
                <XCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-3" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {loginType === 'ortu' && (
                <div>
                  <label className="block text-[11px] font-semibold text-stone-600 mb-1" style={{ fontSize: '0.7rem', color: '#57534e', marginBottom: '0.25rem' }}>Email Orang Tua</label>
                  <input type="email" required value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder="Contoh: budi@gmail.com" className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs" style={{ width: '100%', padding: '0.625rem 0.75rem', backgroundColor: '#fafaf9', border: '1px solid #e7e5e4', borderRadius: '0.75rem', fontSize: '0.8rem', boxSizing: 'border-box' }} />
                </div>
              )}

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1" style={{ fontSize: '0.7rem', color: '#57534e', marginBottom: '0.25rem' }}>
                  Password {loginType === 'guru' ? 'Guru' : 'Orang Tua'}
                </label>
                <div className="relative" style={{ position: 'relative' }}>
                  <input type={showPassword ? "text" : "password"} required value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} placeholder="Masukkan password" className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs pr-10" style={{ width: '100%', padding: '0.625rem 2rem 0.625rem 0.75rem', backgroundColor: '#fafaf9', border: '1px solid #e7e5e4', borderRadius: '0.75rem', fontSize: '0.8rem', boxSizing: 'border-box' }} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '0.625rem', top: '0.625rem', background: 'none', border: 'none', color: '#a8a29e', cursor: 'pointer' }}>
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full py-2.5 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center justify-center gap-2 mt-1 cursor-pointer" style={{ width: '100%', padding: '0.75rem 0', backgroundColor: '#8A9A86', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Masuk Dashboard →
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const currentStudent = students.find(s => s.id === selectedStudentId);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 pb-12">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#FEFAE0] border border-[#8A9A86]/30 rounded-xl flex items-center justify-center text-base">
              🐼
            </div>
            <div>
              <h1 className="font-bold text-stone-800 text-sm leading-tight">宝贝中文</h1>
              <p className="text-[10px] text-stone-400">
                {authRole === 'guru' ? 'Dashboard Guru Les Private' : `Ortu (${students.find(s=>s.id===activeParentStudentId)?.name})`}
              </p>
            </div>
          </div>

          <button onClick={handleLogout} className="px-3 py-1.5 border border-stone-200 hover:bg-rose-50 text-stone-600 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer">
            <LogOut className="w-3.5 h-3.5" /> Keluar
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-6">
        {authRole === 'guru' && (
          <div className="space-y-6">
            <div className="bg-white p-3 rounded-2xl border border-stone-200 flex flex-wrap justify-between items-center gap-3 shadow-xs">
              <div className="flex bg-stone-100 p-1 rounded-xl gap-1">
                <button onClick={() => setActiveTab('reports')} className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${activeTab === 'reports' ? 'bg-white text-[#8A9A86] shadow-xs' : 'text-stone-500'}`}>
                  📝 Input Laporan Sesi
                </button>
                <button onClick={() => setActiveTab('attendance')} className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${activeTab === 'attendance' ? 'bg-white text-[#8A9A86] shadow-xs' : 'text-stone-500'}`}>
                  📅 Input Absensi Private
                </button>
                <button onClick={() => setActiveTab('students')} className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${activeTab === 'students' ? 'bg-white text-[#8A9A86] shadow-xs' : 'text-stone-500'}`}>
                  👶 Kelola Murid ({students.length})
                </button>
              </div>

              <button onClick={() => setShowAddStudentModal(true)} className="px-3.5 py-1.5 bg-[#8A9A86] text-white text-xs font-bold rounded-xl flex items-center gap-1 cursor-pointer">
                <Plus className="w-3.5 h-3.5" /> Tambah Murid
              </button>
            </div>

            {activeTab === 'reports' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-stone-200 space-y-4 shadow-xs">
                  <h2 className="text-xs font-bold text-stone-800 uppercase flex items-center gap-2 border-b pb-3">
                    <FileText className="w-4 h-4 text-[#8A9A86]" /> Input Sesi Les Private
                  </h2>

                  <form onSubmit={saveReport} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">Pilih Murid Private</label>
                      <select value={selectedStudentId} onChange={(e) => setSelectedStudentId(e.target.value)} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium" required>
                        {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">Tanggal Sesi</label>
                        <input type="date" value={reportDate} onChange={(e) => setReportDate(e.target.value)} className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-xl text-xs" required />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">Nilai Latihan (0-100)</label>
                        <input type="number" min="0" max="100" value={practiceScore} onChange={(e) => setPracticeScore(e.target.value)} className="w-full px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-[#8A9A86]" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Materi / Bab Hari Ini</label>
                      <input type="text" placeholder="Contoh: Bab 2 - Anggota Keluarga" value={reportTopic} onChange={(e) => setReportTopic(e.target.value)} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs" required />
                    </div>

                    <div className="space-y-2 border-t pt-3">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-stone-700">Kosakata Baru (Hanzi - Pinyin - Arti)</label>
                        <button type="button" onClick={addVocabRow} className="text-[11px] text-[#8A9A86] font-bold flex items-center gap-0.5 hover:underline cursor-pointer"><Plus className="w-3 h-3" /> Tambah</button>
                      </div>
                      {vocabList.map((v, i) => (
                        <div key={i} className="flex gap-1.5 items-center">
                          <input type="text" placeholder="Hanzi" value={v.hanzi} onChange={(e) => updateVocab(i, 'hanzi', e.target.value)} className="w-1/3 px-2 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs" />
                          <input type="text" placeholder="Pinyin" value={v.pinyin} onChange={(e) => updateVocab(i, 'pinyin', e.target.value)} className="w-1/3 px-2 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs" />
                          <input type="text" placeholder="Arti" value={v.arti} onChange={(e) => updateVocab(i, 'arti', e.target.value)} className="w-1/3 px-2 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs" />
                          {vocabList.length > 1 && <button type="button" onClick={() => removeVocabRow(i)} className="text-rose-400 p-1 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 border-t pt-3">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-stone-700">Pola Kalimat / Latihan</label>
                        <button type="button" onClick={addSentenceRow} className="text-[11px] text-[#8A9A86] font-bold flex items-center gap-0.5 hover:underline cursor-pointer"><Plus className="w-3 h-3" /> Tambah</button>
                      </div>
                      {sentenceList.map((s, i) => (
                        <div key={i} className="flex gap-2 items-center">
                          <input type="text" placeholder="Kalimat..." value={s} onChange={(e) => updateSentence(i, e.target.value)} className="flex-1 px-2.5 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs" />
                          {sentenceList.length > 1 && <button type="button" onClick={() => removeSentenceRow(i)} className="text-rose-400 p-1 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 border-t pt-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">Pemahaman Anak (1-5 Star)</label>
                        <div className="flex gap-1.5 items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} type="button" onClick={() => setComprehensionScore(star)} className="p-0.5 cursor-pointer">
                              <Star className={`w-5 h-5 ${star <= comprehensionScore ? 'text-amber-400 fill-amber-400' : 'text-stone-200'}`} />
                            </button>
                          ))}
                          <span className="text-xs font-bold text-stone-600 ml-2">{comprehensionScore} / 5</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">Catatan Evaluasi Guru</label>
                        <textarea rows="2" placeholder="Catatan keaktifan..." value={teacherNotes} onChange={(e) => setTeacherNotes(e.target.value)} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs"></textarea>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-stone-600 mb-1">Materi Sesi Berikutnya / PR</label>
                        <input type="text" placeholder="PR atau materi berikutnya" value={nextPlan} onChange={(e) => setNextPlan(e.target.value)} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs" />
                      </div>
                    </div>

                    <button type="submit" className="w-full py-2.5 bg-[#8A9A86] hover:bg-[#788874] text-white font-bold text-xs rounded-xl cursor-pointer">
                      💾 Simpan Laporan Sesi Private
                    </button>
                  </form>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex justify-between items-center">
                    <h2 className="text-xs font-bold text-stone-800 uppercase">📋 Riwayat Laporan Sesi ({reports.length})</h2>
                  </div>

                  {reports.length === 0 ? (
                    <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-400 text-xs">Belum ada laporan.</div>
                  ) : (
                    reports.map((rep) => {
                      const student = students.find(s => s.id === rep.studentId);
                      return (
                        <div key={rep.id} className="bg-white p-4 rounded-2xl border border-stone-200 space-y-3 shadow-xs">
                          <div className="flex justify-between items-start border-b pb-2.5">
                            <div>
                              <span className="inline-block bg-[#FEFAE0] text-[#8A9A86] font-bold text-[10px] px-2.5 py-0.5 rounded-full mb-1">{student?.name || 'Murid'}</span>
                              <h3 className="font-bold text-stone-800 text-sm">{rep.topic}</h3>
                            </div>
                            <span className="text-[11px] text-stone-400 font-medium">{rep.date}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-xs">
                            <div className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /><span className="text-stone-600">Pemahaman: <strong>{rep.comprehension}/5</strong></span></div>
                            <div className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-[#8A9A86]" /><span className="text-stone-600">Nilai: <strong>{rep.practiceScore ?? '-'}</strong></span></div>
                          </div>

                          <div className="flex justify-end gap-2 pt-1">
                            <button onClick={() => setPrintReportData(rep)} className="px-3 py-1.5 bg-[#8A9A86]/10 text-[#8A9A86] text-xs font-bold rounded-xl flex items-center gap-1 cursor-pointer">
                              <Printer className="w-3.5 h-3.5" /> Cetak A4 / PDF
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {activeTab === 'attendance' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-stone-200 space-y-4 shadow-xs">
                  <h2 className="text-xs font-bold text-stone-800 uppercase flex items-center gap-2 border-b pb-3">
                    <Calendar className="w-4 h-4 text-[#8A9A86]" /> Input Presensi Private Manual
                  </h2>

                  <form onSubmit={saveManualAttendance} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">Pilih Murid Private</label>
                      <select value={attStudentId} onChange={(e) => setAttStudentId(e.target.value)} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium" required>
                        {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">Tanggal Les Sesi Ini</label>
                      <input type="date" value={attDate} onChange={(e) => setAttDate(e.target.value)} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-semibold" required />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1.5">Status Kehadiran</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { key: 'hadir', label: 'Hadir', bg: 'bg-emerald-500' },
                          { key: 'izin', label: 'Izin', bg: 'bg-amber-500' },
                          { key: 'sakit', label: 'Sakit', bg: 'bg-blue-500' },
                          { key: 'alpa', label: 'Alpa', bg: 'bg-rose-500' }
                        ].map((opt) => (
                          <button key={opt.key} type="button" onClick={() => setAttStatus(opt.key)} className={`py-2 px-3 rounded-xl text-xs font-bold cursor-pointer ${attStatus === opt.key ? `${opt.bg} text-white` : 'bg-stone-100 text-stone-600'}`}>
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1">Catatan Kehadiran (Opsional)</label>
                      <input type="text" placeholder="Contoh: Datang jam 15:30 WIB" value={attNotes} onChange={(e) => setAttNotes(e.target.value)} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs" />
                    </div>

                    <button type="submit" className="w-full py-2.5 bg-[#8A9A86] hover:bg-[#788874] text-white font-bold text-xs rounded-xl cursor-pointer">
                      💾 Catat Presensi Sesi Les
                    </button>
                  </form>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex justify-between items-center">
                    <h2 className="text-xs font-bold text-stone-800 uppercase">📅 Riwayat Absensi Sesi Private ({attendance.length})</h2>
                  </div>

                  {attendance.length === 0 ? (
                    <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-stone-400 text-xs">Belum ada catatan absensi.</div>
                  ) : (
                    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden divide-y divide-stone-100">
                      {attendance.map((att) => {
                        const student = students.find(s => s.id === att.studentId);
                        const badgeColor = 
                          att.status === 'hadir' ? 'bg-emerald-100 text-emerald-700' :
                          att.status === 'izin' ? 'bg-amber-100 text-amber-700' :
                          att.status === 'sakit' ? 'bg-blue-100 text-blue-700' : 'bg-rose-100 text-rose-700';

                        return (
                          <div key={att.id} className="p-3.5 flex justify-between items-center hover:bg-stone-50">
                            <div>
                              <p className="font-bold text-xs text-stone-800">{student?.name || 'Murid'}</p>
                              <div className="flex items-center gap-2 text-[11px] text-stone-400">
                                <span>Tanggal: <strong>{att.date}</strong></span>
                                {att.notes && <span>• {att.notes}</span>}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold capitalize ${badgeColor}`}>{att.status}</span>
                              <button onClick={() => deleteAttendanceRecord(att.id)} className="text-rose-400 hover:text-rose-600 p-1 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <h2 className="text-sm font-bold text-stone-800">👶 Kelola Data Murid Private & Akun Ortu</h2>
                    <p className="text-xs text-stone-400 mt-0.5">Daftarkan murid dan buatkan akun orang tua</p>
                  </div>
                  <button onClick={() => setShowAddStudentModal(true)} className="px-3.5 py-1.5 bg-[#8A9A86] text-white text-xs font-bold rounded-xl flex items-center gap-1 cursor-pointer">
                    <Plus className="w-3.5 h-3.5" /> Tambah Murid
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {students.map((std) => (
                    <div key={std.id} className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="font-bold text-xs text-stone-800">{std.name}</h3>
                        <p className="text-[11px] text-stone-500">Email Ortu: <strong>{std.parentEmail}</strong></p>
                        <p className="text-[11px] text-stone-500">Password Login: <code className="bg-stone-200 px-1.5 py-0.5 rounded text-[10px]">{std.parentPassword}</code></p>
                      </div>

                      <button onClick={() => deleteStudent(std.id)} className="text-rose-400 hover:text-rose-600 p-1 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {authRole === 'ortu' && (
          <div className="space-y-6">
            <div className="bg-white p-3 rounded-2xl border border-stone-200 flex justify-between items-center shadow-xs">
              <div className="flex bg-stone-100 p-1 rounded-xl gap-1">
                <button onClick={() => setParentActiveTab('reports')} className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${parentActiveTab === 'reports' ? 'bg-white text-[#8A9A86] shadow-xs' : 'text-stone-500'}`}>
                  📝 Laporan Belajar & Nilai
                </button>
                <button onClick={() => setParentActiveTab('attendance')} className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${parentActiveTab === 'attendance' ? 'bg-white text-[#8A9A86] shadow-xs' : 'text-stone-500'}`}>
                  📅 Riwayat Absensi Kehadiran
                </button>
              </div>
            </div>

            {parentActiveTab === 'reports' && (
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
                <h2 className="text-sm font-bold text-stone-800 border-b pb-3">Laporan Belajar - {currentStudent?.name}</h2>

                {reports.filter(r => r.studentId === activeParentStudentId).length === 0 ? (
                  <p className="text-stone-400 text-xs text-center py-6">Belum ada laporan belajar.</p>
                ) : (
                  reports.filter(r => r.studentId === activeParentStudentId).map((rep) => (
                    <div key={rep.id} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-xs text-stone-800">{rep.topic}</p>
                          <p className="text-[11px] text-stone-400 mt-0.5">Tanggal Sesi: {rep.date}</p>
                        </div>
                        <button onClick={() => setPrintReportData(rep)} className="px-3 py-1 bg-[#8A9A86] text-white text-xs font-bold rounded-xl flex items-center gap-1 cursor-pointer">
                          <Printer className="w-3.5 h-3.5" /> Unduh PDF
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2 bg-white p-2.5 rounded-lg border border-stone-200 text-xs">
                        <div>
                          <p className="text-stone-400 text-[10px]">Tingkat Pemahaman</p>
                          <p className="font-bold text-amber-500">⭐ {rep.comprehension} / 5</p>
                        </div>
                        <div>
                          <p className="text-stone-400 text-[10px]">Nilai Latihan</p>
                          <p className="font-bold text-[#8A9A86]">🏆 {rep.practiceScore ?? '-'} / 100</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {parentActiveTab === 'attendance' && (
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
                <h2 className="text-sm font-bold text-stone-800 border-b pb-3">Riwayat Absensi - {currentStudent?.name}</h2>

                {attendance.filter(a => a.studentId === activeParentStudentId).length === 0 ? (
                  <p className="text-stone-400 text-xs text-center py-6">Belum ada catatan absensi.</p>
                ) : (
                  <div className="divide-y divide-stone-100 border rounded-2xl overflow-hidden">
                    {attendance.filter(a => a.studentId === activeParentStudentId).map((att) => {
                      const badgeColor = 
                        att.status === 'hadir' ? 'bg-emerald-100 text-emerald-700' :
                        att.status === 'izin' ? 'bg-amber-100 text-amber-700' :
                        att.status === 'sakit' ? 'bg-blue-100 text-blue-700' : 'bg-rose-100 text-rose-700';

                      return (
                        <div key={att.id} className="p-3.5 flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#8A9A86]" />
                            <div>
                              <p className="text-xs font-semibold text-stone-700">{att.date}</p>
                              {att.notes && <p className="text-[10px] text-stone-400">{att.notes}</p>}
                            </div>
                          </div>
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold capitalize ${badgeColor}`}>{att.status}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {showAddStudentModal && (
        <div className="fixed inset-0 bg-stone-900/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-sm w-full p-5 shadow-xl border border-stone-200 space-y-3">
            <h3 className="font-bold text-stone-800 text-sm border-b pb-2">👶 Tambah Murid & Buat Akun Ortu</h3>
            <form onSubmit={saveStudent} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">Nama Lengkap Murid</label>
                <input type="text" placeholder="Contoh: Budi Santoso" value={newStudentName} onChange={(e) => setNewStudentName(e.target.value)} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs" required />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">Email Orang Tua (Untuk Login)</label>
                <input type="email" placeholder="Contoh: budi@gmail.com" value={newParentEmail} onChange={(e) => setNewParentEmail(e.target.value)} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs" required />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">Password Orang Tua</label>
                <input type="text" placeholder="Contoh: Budi123" value={newParentPassword} onChange={(e) => setNewParentPassword(e.target.value)} className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs" required />
              </div>

              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => setShowAddStudentModal(false)} className="flex-1 py-2 bg-stone-100 text-stone-600 rounded-xl text-xs font-bold cursor-pointer">Batal</button>
                <button type="submit" className="flex-1 py-2 bg-[#8A9A86] text-white rounded-xl text-xs font-bold cursor-pointer">Simpan Murid</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}